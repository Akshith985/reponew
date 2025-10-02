'use server';

import { z } from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function sendEmail(formData: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(formData);

  if (!validatedFields.success) {
    throw new Error('Invalid form data.');
  }

  const { name, email, message } = validatedFields.data;

  // Here you would integrate your email sending service (e.g., Resend, SendGrid)
  // For demonstration, we're just logging it to the console.
  console.log('--- New Message ---');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  console.log('-------------------');

  // Example with Resend (you would need to install the 'resend' package)
  /*
  import { Resend } from 'resend';
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'your-email@example.com', // Replace with your email address
      subject: `New message from ${name} on your portfolio`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send email.');
  }
  */

  return { success: true };
}
