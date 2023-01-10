import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: 'smtpout.secureserver.net',
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
        user: 'hello@and249.codes',
        pass: "Mam4UwUIDon'tWannaDie",
    },
});

let date = new Date(new Date()).toLocaleString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
});

let day = new Date(new Date()).toLocaleString('en-us', {
    weekday: 'long',
});

let message = {
    from: 'hello@and249.codes',
    to: 'and24903@gmail.com',
    subject: `Message on ${day}`,
    text: `This message was sent on ${date}`,
};

try {
    transport.sendMail(message);
} catch (error) {
    console.error(error);
}
