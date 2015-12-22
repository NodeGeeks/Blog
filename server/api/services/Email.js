/**
 * Created by aaronrussell on 10/29/15.
 */

var nodemailer = require('nodemailer'),
        directTransport = require('nodemailer-direct-transport');

function HTMLEmailTemplate(body) {
    var templateString = ['<body background="images/bg.jpg">',
        '<table id="pageContainer" width="100%" align="center" background="images/bg.jpg" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; background-repeat:repeat; background-color:#eeeeee;">',
        '<tr>',
        '<td style="padding:30px 20px 40px 20px;">',
        '<!-- Start of logo, date, forward  and home links container -->',
        '<table width="600" align="center" cellpadding="0" cellspacing="0" style="border-collapse:collapse; text-align:left; font-family:Arial, Helvetica, sans-serif; font-weight:normal; font-size:12px; line-height:15pt; color:#777777;">',
        '<tr>',
        '<td colspan="2" style="padding-bottom:10px; font-size:12px; line-height:100%; text-align:right; color:#777777;">',
        'Problem viewing email? <a href="#" style="text-decoration:none; color:#5187bd; line-height:100%;">Click here to view it online</a>.',
        '</td>',
        '</tr>',
        '<tr>',
        '<td bgcolor="#5187bd" colspan="2" height="7" style="font-size:2px; line-height:0px;"><img alt="" height="7" src="images/blank.gif" width="600" align="left" vspace="0" hspace="0" border="0" style="display:block;" /></td>',
        '</tr>',
        '<tr>',
        '<td bgcolor="#ffffff" width="255" valign="middle" style="padding:40px 30px 35px 30px; font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:100%; color:#5187bd;">',
        '<img alt="Logo" src="images/logo.png" align="left" border="0" vspace="0" hspace="0" style="display:block;" />',
        '</td>',
        '<td bgcolor="#ffffff" width="255" valign="middle" style="padding:20px 30px 15px 0; font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:100%; color:#777777; text-align:right;">',
        '<table width="254" align="right" cellpadding="0" cellspacing="0" style="border-collapse:collapse; text-align:center; font-family:Arial, Helvetica, sans-serif; font-weight:normal; font-size:12px; line-height:100%; color:#777777;">',
        '<tr>',
        '<td width="66" valign="top" style="line-height:100%; color:#5187bd;">',
        '<img alt="●" src="images/calendarIcon.png" height="32" width="32" border="0" vspace="0" hspace="17" style="display:block;" /> November',
        '</td>',
        '<td width="20" style="padding:0 10px; line-height:100%; text-align:center;"><img alt="" src="images/separator.png" width="20" height="50" border="0" style="vertical-align:0px; display:block;" /></td>',
        '<td width="54" valign="top" style="line-height:100%;">',
        '<a href="#" style="text-decoration:none; color:#5187bd; display:block; line-height:100%;"><img alt="●" src="images/forwardIcon.png" height="32" width="32" border="0" vspace="0" hspace="11" style="display:block;" /> Forward</a>',
        '</td>',
        '<td width="20" style="padding:0 10px; line-height:100%; text-align:center;"><img alt="" src="images/separator.png" width="20" height="50" border="0" style="vertical-align:0px; display:block;" /></td>',
        '<td width="54" valign="top" style="line-height:100%;">',
        '<a href="#" style="text-decoration:none; color:#5187bd; display:block; line-height:100%;"><img alt="●" src="images/websiteIcon.png" height="32" width="32" border="0" vspace="0" hspace="11" style="display:block;" /> Website</a>',
        '</td>',
        '</tr>',
        '</table>',
        '</td>',
        '</tr>',
        '<tr>',
        '<td colspan="2" height="11" style="font-size:2px; line-height:0px;"><img alt="" src="images/divider.png" height="11" width="600" align="left" border="0" vspace="0" hspace="0" style="display:block;" /></td>',
        '</tr>',
        '</table>',
        '<!-- End of logo, date, forward  and home links container -->',

        '<!-- Start of text banner -->',
        '<table bgcolor="#ffffff" width="600" align="center" cellpadding="0" cellspacing="0" style="border-collapse:collapse; text-align:left; font-family:Arial, Helvetica, sans-serif; font-weight:normal; font-size:12px; line-height:15pt; color:#777777;">',
        '<tr>',
        '<td style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:15pt; color:#777777;"><img alt="image" src="images/textBanner.png" width="600" height="100" align="left" border="0" vspace="0" hspace="0" style="display:block;" /></td>',
        '</tr>',
        '<tr>',
        '<td height="11" style="font-size:2px; line-height:0px;"><img alt="" src="images/divider.png" height="11" width="600" align="left" border="0" vspace="0" hspace="0" style="display:block;" /></td>',
        '</tr>',
        '</table>',
        '<!-- End of text banner -->',
        '<!-- Start of footer -->',
        '<table bgcolor="#444444" width="600" align="center" cellpadding="0" cellspacing="0" style="border-collapse:collapse; text-align:left; font-family:Arial, Helvetica, sans-serif; font-weight:normal; font-size:12px; line-height:15pt; color:#cccccc;">',
        '<tr>',
        '<td style="padding-top:35px; padding-bottom:10px; font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:15pt; color:#777777;"><img alt="Spread the love!" src="images/spreadTheLove.png" width="600" height="26" align="left" border="0" vspace="0" hspace="0" style="display:block;" /></td>',
        '</tr>',
        '<tr>',
        '<td style="padding-top:5px; padding-right:30px; padding-bottom:35px; padding-left:30px; font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:15pt; color:#cccccc;">',
        '<table width="540" cellpadding="0" cellspacing="0" style="border-collapse:collapse; text-align:left; font-family:Arial, Helvetica, sans-serif; font-weight:normal; font-size:12px; line-height:15pt; color:#cccccc;">',
        '<tr>',
        '<td width="135"><a style="display:block; outline:none;" href="http://api.addthis.com/oexchange/0.8/forward/facebook/offer?pco=tbxnj-1.0&url=http://gifky.com&pubid=xa-4fc6087969fa9fcd" target="_blank"><img alt="Share on Facebook" src="images/facebookShare.png" height="80" width="135" border="0" vspace="0" hspace="0" style="display:block;" /></a></td>',
        '<td width="135"><a style="display:block; outline:none;" href="http://api.addthis.com/oexchange/0.8/forward/twitter/offer?pco=tbxnj-1.0&url=http://gifky.com&pubid=xa-4fc6087969fa9fcd" target="_blank"><img alt="Tweet" src="images/tweetShare.png" height="80" width="135" border="0" vspace="0" hspace="0" style="display:block;" /></a></td>',
        '<td width="135"><a style="display:block; outline:none;" href="http://api.addthis.com/oexchange/0.8/forward/googleplus/offer?pco=tbxnj-1.0&url=http://gifky.com&pubid=xa-4fc6087969fa9fcd" target="_blank"><img alt="Share on Google Plus" src="images/googlePlusShare.png" height="80" width="135" border="0" vspace="0" hspace="0" style="display:block;" /></a></td>',
        '<td width="135"><a style="display:block; outline:none;" href="http://api.addthis.com/oexchange/0.8/forward/email/offer?pco=tbxnj-1.0&url=http://gifky.com&pubid=xa-4fc6087969fa9fcd" target="_blank"><img alt="Email" src="images/emailShare.png" height="80" width="135" border="0" vspace="0" hspace="0" style="display:block;" /></a></td>',
        '</tr>',
        '</table>',
        '</td>',
        '</tr>',
        '<tr>',
        '<td height="11" style="font-size:2px; line-height:0px;"><img alt="" src="images/divider_darkBg.png" height="11" width="600" align="left" border="0" vspace="0" hspace="0" style="display:block;" /></td>',
        '</tr>',
        '<tr>',
        '<td>',
        '<table width="600" cellpadding="0" cellspacing="0" style="border-collapse:collapse; text-align:left; font-family:Arial, Helvetica, sans-serif; font-weight:normal; font-size:12px; line-height:15pt; color:#cccccc;">',
        '<tr>',
        '<td width="30"><img alt="" height="10" src="images/blank.gif" width="30" align="left" vspace="0" hspace="0" border="0" style="display:block;" /></td>',
        '<td width="160" valign="top" style="padding-top:30px; padding-bottom:30px; font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:15pt; color:#cccccc;">',
        'Copyright <img alt="©" src="images/copyright.png" style="vertical-align: -1px;" border="0" height="12" width="11" /> 2012 <a style="text-decoration:underline; color:#5187bd;" href="http://gifky.com">Gifky.com</a> all rights reserved.<br /><br />',
        '13 Elizabeth Street Melbourne, Victoria 3000 Australia',
        '</td>',
        '<td width="30"><img alt="" height="10" src="images/blank.gif" width="30" align="left" vspace="0" hspace="0" border="0" style="display:block;" /></td>',
        '<td width="160" valign="top" style="padding-top:34px; padding-bottom:30px; font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:15pt; color:#cccccc;">',
        '<table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; text-align:left; font-family:Arial, Helvetica, sans-serif; font-weight:normal; font-size:12px; line-height:100%; color:#cccccc;">',
        '<tr>',
        '<td class="footer_list_image" width="20" valign="top" style="padding:0 0 9px 0;"><img alt="●" src="images/homeIcon.png" width="13" height="12" border="0" align="left" style="display:block;" /></td>',
        '<td class="footer_list" width="140" valign="top" style="padding:0 0 9px 0; line-height:9pt;">',
        '<a href="#" style="text-decoration:underline; color:#5187bd; line-height:9pt;">' + global.app.domain + '</a>',
        '</td>',
        '</tr>',
        '<tr>',
        '<td class="footer_list_image" width="20" valign="top" style="padding:0 0 9px 0;"><img alt="●" src="images/emailIcon.png" width="12" height="12" border="0" align="left" style="display:block;" /></td>',
        '<td class="footer_list" width="140" valign="top" style="padding:0 0 9px 0; line-height:9pt;">',
        '<a href="mailto:" style="text-decoration:underline; color:#5187bd; line-height:9pt;">email@website.com</a>',
        '</td>',
        '</tr>',
        '<tr>',
        '<td class="socialIcons" colspan="2" style="padding-top:17px; padding-bottom:5px;">',
        '<a href="#"><img alt="Facebook" src="images/facebookIcon.png" border="0" vspace="0" hspace="0" /></a>&nbsp;&nbsp;',
        '<a href="#"><img alt="Twitter" src="images/twitterIcon.png" border="0" vspace="0" hspace="0" /></a>&nbsp;&nbsp;',
        '<a href="#"><img border="0" vspace="0" hspace="0" alt="Google Plus" src="images/googlePlusIcon.png" /></a>&nbsp;&nbsp;',
        '<a href="#"><img border="0" vspace="0" hspace="0" alt="Linkedin" src="images/linkedinIcon.png" /></a>',
        '</td>',
        '</tr>',
        '</table>',
        '</td>',
        '<td width="30"><img alt="" height="10" src="images/blank.gif" width="30" align="left" vspace="0" hspace="0" border="0" style="display:block;" /></td>',
        '<td width="160" valign="top" style="padding-top:30px; padding-bottom:30px; font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:15pt; color:#cccccc;">',
        '<strong>Why receiving this email?</strong><br />',
        'Because you signed up to our mailing list.<br /><br />',
        '<strong>Not interested anymore?</strong><br />',
        '<a href="#" style="text-decoration:underline; color:#5187bd;">Unsubscribe from our list</a>',
        '</td>',
        '<td width="30"><img alt="" height="10" src="images/blank.gif" width="30" align="left" vspace="0" hspace="0" border="0" style="display:block;" /></td>',
        '</tr>',
        '</table>',
        '</td>',
        '</tr>',
        '<tr>',
        '<td bgcolor="#5187bd" height="7" style="font-size:2px; line-height:0px;"><img alt="" height="7" src="images/blank.gif" width="600" align="left" vspace="0" hspace="0" border="0" style="display:block;" /></td>',
        '</tr>',
        '</table>',
        '<!-- End of footer -->',
        '</td>',
        '</tr>',
        '</table>',
        '</body>'].join();
}

module.exports = {
    send: function (subject, body, to) {

        var transport = nodemailer.createTransport(directTransport({
            name: global.app.domain,
            debug: false
        }));

        var emailOptions = {
            from: global.app.name + ' <noreply@' + global.app.domain + '>',
            to: to,
            subject: subject,
            text: body,
            html: HTMLEmailTemplate(body)
        };

        transport.sendMail(emailOptions, function (error, response) {

            if (error) {
                console.log(error);
            } else {
                console.log("Message sent: " + response);
            }
            //todo: handle the response appropriately before putting in production
        });
    }
};