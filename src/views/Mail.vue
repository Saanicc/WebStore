<template>
    <div class="mail">
        <label>Name:
            <input type="text" placeholder="name" v-model="name">
        </label>
        <br>
        <label>Message:
            <input type="text" placeholder="Message" v-model="msg">
        </label>
        <br>
        <label>E-mail:
            <input type="text" placeholder="e-mail" v-model="email">
        </label>
        <button @click="sendEmail(email, msg, name)">Skicka</button>
    </div>
</template>

<script>
export default {
    data() {
        var Email = { 
            send: function (a) { 
                return new Promise(function (n) { 
                    a.nocache = Math.floor(1e6 * Math.random() + 1), 
                    a.Action = "Send"; 
                    var t = JSON.stringify(a); 
                    Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { 
                        n(e) 
                    }) 
                }) 
            }, 
            ajaxPost: function (e, n, t) {
                var a = Email.createCORSRequest("POST", e); 
                a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), 
                a.onload = function () { 
                    var e = a.responseText; 
                    null != t && t(e) 
                }, 
                a.send(n) 
            }, 
            ajax: function (e, n) {
                var t = Email.createCORSRequest("GET", e); 
                t.onload = function () { 
                    var e = t.responseText; 
                    null != n && n(e) 
                }, 
                t.send() 
            }, 
            createCORSRequest: function (e, n) { 
                var t = new XMLHttpRequest; 
                return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new this.XDomainRequest).open(e, n) : t = null, t 
            } 
        }
        return{
            email: "",
            msg: "",
            name: "",
            Email
        }
    },
    methods: {
        sendEmail(email, msg, name) {
            this.Email.send({
                Host : "mail.gmx.com",
                Username : "webstore496@gmx.com",
                Password : "&KX*3aFz8vzo",
                To : email,
                From : "webstore496@gmx.com",
                Subject : "Importaint message for Mr. "+name+"!",
                Body : msg,
            }).then(
                message => alert(message),
                console.log('message: '+msg+' email: '+email+' name: '+name)
            );
        }
    },
    name: "Mail",
};
</script>