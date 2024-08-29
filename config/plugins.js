module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'strapi-provider-email-brevo',
      providerOptions: {
        apiKey: env('SMTP_DEFAULT_API'),
      },
      settings: {
        defaultSenderEmail: env('SMTP_USER'),
        defaultSenderName: 'Sender Name',
        defaultReplyTo: env('SMTP_USER'),
      },
    },
  },
});

 
 