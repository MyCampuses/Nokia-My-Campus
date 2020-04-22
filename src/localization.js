import LocalizedStrings from 'react-localization'

let strings = new LocalizedStrings({
    en:{
        signIn: "Sign In",
        signUp: "Sign Up",
        emailAddress: "Email Address",
        username: "Username",
        password: "Password",
        confirmPassword: "Confirm Password",
        rememberMe: "Remember Me",
        forgotPass: "Forgot Password?",
        noAccount: "Don't have an account? Sign Up",
        welcome: "Welcome to the progressive web application that provides information about current status of three most popular areas in Nokia HQ, Espoo",
        logoAlt: "MyCampus Logo",
        validEmail: "Please enter a valid email",
        enterEmail: "Enter the email you want the password to be reset and click send",
        send: "Send",
        joinPlatform: "Join Nokia MyCampus platform",
        backToLogin: "Back to Login",
        usernameError: "Username must be between 2-20 characters",
        passwordError: "Passwords don't match",
        pleaseEnterEmail: "Please enter an email",
        pleaseEnterConfirmPass: "Please enter password confirmation",
        pleaseEnterPassword: "Please enter an password",
        pleaseEnterName: "Please enter a name",
        waitTime1: "wait time < 30s",
        waitTime2: "wait time < 1m",
        waitTime3: "wait time < 1m 30s",
        waitTime4: "wait time < 2m",
        waitTime5: "wait time > 2m",
        restaurantPageTitle: "Queue Times",
        p10PageTitle: "P10",
        live: "Live",
        history: "History",
        pleaseEnterUsername: "Please enter an username",
        topBarMenuItemHome: "Home",
        topBarMenuItemRestaurant: "Restaurant",
        topBarMenuItemP5: "P5",
        topBarMenuItemP10: "P10",
        topBarMenuItemInfo: "Info",
        topBarMenuItemLogout: "Logout",
        infoPageHeading: "MyCampus is a portal providing access to applications created by Nokia’s employees,\n" +
            "    Quja start ups and other ecosystem partners. The key enabler is the underlying Nokia Innovation Platform (NIP).\n" +
            "    For new ideas and questions, please contact: mikael.lindblad@nokia.com",
        infoPageP1: "Thermal camera sensors cover Midpoint restaurant and the app shows current utilization rate and provides historical data.",
        infoPageP2: "Car count is provided by time-of-flight sensors and thermal cameras at bottom levels in parking P5 and different floor levels in parking P10",
        liveUtilization: "Live Utilization",
        insideLevelsP5: "Inside levels of P5",
        insideLevels: "Inside levels",
        roofTopLevels: "Rooftop level",
        roofTopElectricPlaces: "Rooftop electric places (est)",
        p10MapAlt: "P10 Map",
        p5MapAlt:"P5 Map",
        map: "Map",
        p10electric: "P10 Rooftop Electic (est.)",
        p10inside: "P10 Inside",
        p10rooftop:"P10 Rooftop",
        p5inside: "P5 Inside",
        fillRate: "Fill Rate",
        resetToken:"Reset Token",
        resetPasswordText: "Enter the Email, New Password and the Reset Token you got to change to a new Password",
        inside:"Inside",
        rooftop:"Rooftop",
        electric: "Electric(est.)",
        p10insideutil: "Inside Utilization",
        p10rooftoputil:"Rooftop Utilization",
        p10electricutil:"Electric Utilization(est.)",
        level:"Level",
        passwordWasReset: "Password changed successfully",
        requestError: "Something went wrong with your request. Please try again.",
        graph: "Graph",
        verificationToken: "Verification Token",
        resend: "Resend Verification Email",
        userVerification: "Use the verification code you have gotten by email. If it has not arrived in the inbox be sure to check deleted/spam folder.",
        sentVerification: "You can now check your email for a verification code."

    },
    fi:{
        signIn: "Kirjaudu",
        signUp: "Rekisteröidy",
        emailAddress: "Sähköposti",
        username: "Käyttäjänimi",
        password: "Salasana",
        confirmPassword: "Varmista salasana",
        rememberMe: "Muista minut",
        forgotPass: "Unohtuiko salasana?",
        noAccount: "Ei käyttäjätiliä? Rekisteröidy",
        welcome: "Tervetuloa progressiiviseen verkko sovellukseen joka tarjoaa tietoa Nokian Karamalmin kampuksen kolmesta suosituimmasta paikasta.",
        logoAlt: "MyCampus Logo",
        validEmail: "Syötä sähköposti",
        enterEmail: "Syötä sähköposti jonka salasanan tahdot resetoida ja paina lähetä",
        send: "Lähetä",
        backToLogin:"Takaisin Kirjautumiseen",
        joinPlatform: "Liity Nokia MyCampus alustalle",
        usernameError: "Käyttäjänimen tulee olla 2-20 merkkiä pitkä",
        passwordError: "Salasanat eivät täsmää",
        pleaseEnterEmail: "Syötä sähköposti",
        pleaseEnterConfirmPass: "Syötä salasanan vahvistus",
        pleaseEnterPassword: "Syötä salasana",
        pleaseEnterUsername: "Syötä käyttäjänimi",
        pleaseEnterName: "Syötä nimi",
        waitTime1: "jonotusaika < 30s",
        waitTime2: "jonotusaika < 1m",
        waitTime3: "jonotusaika < 1m 30s",
        waitTime4: "jonotusaika < 2m",
        waitTime5: "jonotusaika > 2m",
        restaurantPageTitle: "Jonotusajat",
        p10PageTitle: "P10",
        live: "Live",
        history: "Vanha Data",
        topBarMenuItemHome: "Koti",
        topBarMenuItemRestaurant: "Ravintola",
        topBarMenuItemP5: "P5",
        topBarMenuItemP10: "P10",
        topBarMenuItemLogout: "Kirjaudu Ulos",
        infoPageHeading: "MyCampus on portaali, joka tarjoaa yhteyden Nokian työntekijöiden,Quja startuppien,\n" +
            "    ja muiden ekosysteemin yhteistyökumppanien tekemiin sovelluksiin. Pääasiallinen mahdollistaja on perustana oleva Nokia Innovation Platform (NIP).\n" +
            "    Uusia ideoita ja kysymyksiä koskien, ota yhteyttä: mikael.lindblad@nokia.com",
        infoPageP1: "Lämpökameroiden sensorit kattavat keskikohdan ravintolan ja sovellus näyttää nykyisen käyttöasteen sekä tarjoaa historiallista dataa",
        infoPageP2: "Autojen lukumäärän tarjoaa time-of-flight -sensorit ja lämpökamerat P5-parkkitason alatasoilla sekä P10-parkkitason eri kerroksissa",
        liveUtilization: "Nykyinen käyttöaste",
        insideLevelsP5: "P5:n sisätilan tasot",
        insideLevels: "Sisätilan tasot",
        roofTopLevels: "Kattotaso",
        roofTopElectricPlaces: "Sähköpaikat katolla (arvio)",
        p10MapAlt: "P10 Kartta",
        p5MapAlt:"P5 Kartta",
        map: "Kartta",
        p10electric: "P10 Sähköpaikat (arvio)",
        p10inside: "P10 Sisätaso",
        p10rooftop:"P10 kattotaso",
        p5inside: "P5 Sisätaso",
        fillRate: "Täyttöaste",
        resetToken: "Nollaus Koodi",
        resetPasswordText: "Syötä sähköposti, uusi salasanasi ja koodi jonka sait sähköpostiisi vaihtaeksi salasanasi",
        inside:"Sisätaso",
        rooftop:"Kattotaso",
        electric: "Sähköpaikat(arvio)",
        p10insideutil: "Sisätason käyttöaste",
        p10rooftoputil:"Kattotason käyttöaste",
        p10electricutil:"Sähköpaikat käyttöaste(arvio)",
        level:"Taso",
        graph: "Graafi",
        passwordWasReset: "Salasanan vaihto onnistui!",
        requestError: "Jokin meni pieleen pyynnössä. Yritä Uudelleen",
        verificationToken: "Vahvistustunnus",
        resend: "Lähetä Vahvistussähköposti Uudelleen",
        userVerification: "Käytä vahvistuskoodiasi täällä. Vahvistuskoodin pitäisi olla sähköpostissasi. Muista tarkistaa myös poistetu / roskapostikansio, jos viesti ei näy pääkansiossa",
        sentVerification: "Vahvistuskoodi lähetetty sähköpostiin."
    },
    se:{
        signIn: "Logga In",
        signUp: "Logga Up",
        emailAddress: "Epostadress",
        username: "Användarnamn",
        password: "Lösenord",
        confirmPassword: "Bekräfta Lösenordet",
        rememberMe: "Kom ihåg mig",
        forgotPass: "Glömt Lösenordet?",
        noAccount: "Skapa ett nytt konto",
        welcome: "Välkommen till progressiva web applicationen som erbjudar information av de tre mäst populära områden på Nokia HQ, Espoo",
        logoAlt: "MyCampus Logo",
        validEmail: "Ange en giltig e-postadress",
        enterEmail: "Ange e-postadressen vart du vill ha lösenord återställt och tryck skicka",
        send: "Skicka",
        joinPlatform: "Gå med Nokia MyCampus platform",
        backToLogin: "Tillbaka till Login",
        usernameError: "Användarnamnet måste vara mellan 2-20 tecken",
        passwordError: "Lösenordet matchar inte",
        pleaseEnterEmail: "Ange en giltig epostadress",
        pleaseEnterConfirmPass: "Ange lösenordet igen",
        pleaseEnterPassword: "Ange lösenord",
        pleaseEnterName: "Ange ett namn",
        waitTime1: "väntetid < 30s",
        waitTime2: "väntetid < 1m",
        waitTime3: "väntetid < 1m 30s",
        waitTime4: "väntetid < 2m",
        waitTime5: "väntetid > 2m",
        restaurantPageTitle: "Kötider",
        p10PageTitle: "P10",
        live: "Live",
        history: "Historia",
        pleaseEnterUsername: "Ange ett användarnamn",
        topBarMenuItemHome: "Hem",
        topBarMenuItemRestaurant: "Restaurang",
        topBarMenuItemP5: "P5",
        topBarMenuItemP10: "P10",
        topBarMenuItemInfo: "Info",
        topBarMenuItemLogout: "Logga ut",
        infoPageHeading: "MyCampus är en portal som ger åtkomst till applikationen skapad av anställda på Nokia,\n" +
            "    Quja start ups och andra partners i ekosystemet. Huvud möjliggöraren är Nokia Innovation Platform (NIP).\n" +
            "    För nya idéer och frågor kontakta: mikael.lindblad@nokia.com",
        infoPageP1: "Värmekamerasensorer täcker restaurangens centrum och appen visar aktuellt beläggning och ger historiska data",
        infoPageP2: "Biltal tillhandahålls av  by time-of-flight sensorer och värmekameror på bottennivåer i parkering P5 och olika våningsnivåer i parkering P10",
        liveUtilization: "Live Utilization",
        insideLevelsP5: "Inre nivå av P5",
        insideLevels: "Inre nivåer",
        roofTopLevels: "Tak nivå",
        roofTopElectricPlaces: "Tak elektriska platser (uppskatning)",
        p10MapAlt: "P10 Karta",
        p5MapAlt:"P5 Karta",
        map: "Karta",
        p10electric: "P10 Tak elektriska(est)",
        p10inside: "P10 Inre nivåer",
        p10rooftop:"P10 Tak nivå",
        p5inside: "P5 Inre nivåer",
        fillRate: "Fyllnadsgrad",
        resetToken:"Återställnings tecken",
        resetPasswordText: "Ange e-postadresset, nya lösenordet och the återställnings tecken du fick för att byta lösenordet.",
        inside:"Inuti",
        rooftop:"Tak",
        electric: "Elektrisk(uppskatning)",
        p10insideutil: "Inre Användning",
        p10rooftoputil:"Tak Användning",
        p10electricutil:"Elektriska Användning(uppskatning)",
        level:"Nivå",
        graph: "Graf",
        verificationToken: "Verifikations Tecken",
        resend: "Återsänd Verifikations EPostadressen",
        userVerification: "Använd verifikations koden du fått via epost. Kolla deleterade/spam foldern om du inte har fått eposten i inkorgen. ",
        sentVerification: "Verifikations koden har skickats till er epost."
    }
});

export default strings;
