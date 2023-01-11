import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transport = nodemailer.createTransport({
    host: 'mail.and249.codes',
    port: 465,
    secure: 'SSL', // upgrade later with STARTTLS
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    },
});

let date = new Date(new Date()).toLocaleString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'IST',
});

let time = new Date(new Date()).toLocaleString('en-us', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'IST',
});

let day = new Date(new Date()).toLocaleString('en-us', {
    weekday: 'long',
});

let message = {
    from: process.env.EMAIL,
    to: 'and24903@gmail.com',
    subject: `Message on ${day}`,
    text: `This message was sent on ${date} at ${time}`,
};

try {
    transport.sendMail(message).then((info) => {
        console.log('Message sent!');
    });
} catch (error) {
    console.error(error);
}
