const nodemailer = require("nodemailer");

const sendMail = (url, message) => {
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "treedigitsmtp@gmail.com",
          pass: "msjw hxvz qszz eyza",
        },
      });
    //shares
    //pensions
    //global
    //whatsyour

  const options = {
    from: "supportBAU@treedigit.com",
    to: "TreeDigit_Digital_Team@treedigit.com",
    subject: `BAU site is down - ${url}`,
    text: JSON.stringify(message),
  };

  transporter.sendMail(options, (error, info) => {
    if (error) console.log(error);
    else console.log(info);
  });
};

module.exports={
    sendMail
}