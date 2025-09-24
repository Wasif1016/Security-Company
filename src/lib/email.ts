import nodemailer, { Transporter } from 'nodemailer';

let cachedTransporter: Transporter | null = null;

export function getEmailTransporter(): Transporter {
  if (cachedTransporter) return cachedTransporter;

  const firstNonEmpty = (...vals: Array<string | undefined>) => {
    for (const v of vals) {
      if (typeof v === 'string') {
        const t = v.trim();
        if (t) return t;
      }
    }
    return undefined;
  };

  const host = firstNonEmpty(process.env.BREVO_HOST, process.env.SMTP_HOST);
  const portRaw = firstNonEmpty(process.env.BREVO_PORT, process.env.SMTP_PORT);
  const port = portRaw ? Number(portRaw) : NaN;
  const user = firstNonEmpty(process.env.BREVO_USER, process.env.SMTP_USER);
  const pass = firstNonEmpty(process.env.BREVO_PASS, process.env.SMTP_PASS);

  const missing: string[] = [];
  if (!host) missing.push('BREVO_HOST');
  if (!portRaw) missing.push('BREVO_PORT');
  if (Number.isNaN(port)) missing.push('BREVO_PORT_INVALID');
  if (!user) missing.push('BREVO_USER');
  if (!pass) missing.push('BREVO_PASS');

  if (missing.length) {
    console.error('SMTP_ENV_MISSING', {
      missing,
      hasHost: Boolean(host),
      hasPort: Boolean(portRaw),
      portValue: portRaw,
      hasUser: Boolean(user),
      hasPass: Boolean(pass)
    });
    throw new Error('SMTP configuration missing. Set BREVO_HOST, BREVO_PORT, BREVO_USER, BREVO_PASS.');
  }

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure: false,
    auth: { user, pass },
  });

  return cachedTransporter;
}

export interface SendMailParams {
  to: string | string[];
  subject: string;
  html?: string;
  text?: string;
  attachments?: Array<{ filename: string; content: Buffer | string; contentType?: string }>;
  from?: string;
}

export async function sendMail(params: SendMailParams) {
  const transporter = getEmailTransporter();
  const from = params.from || ((process.env.BREVO_FROM || '').trim() || (process.env.SMTP_FROM || '').trim());
  if (!from) {
    throw new Error('Missing from address. Set BREVO_FROM.');
  }

  console.log('EMAIL_SENDING', { to: Array.isArray(params.to) ? params.to : [params.to] });

  return transporter.sendMail({
    from,
    to: params.to,
    subject: params.subject,
    html: params.html,
    text: params.text,
    attachments: params.attachments,
  });
}


