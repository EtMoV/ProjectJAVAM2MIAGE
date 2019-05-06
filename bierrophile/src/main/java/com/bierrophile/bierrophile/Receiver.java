package com.bierrophile.bierrophile;

import java.util.concurrent.CountDownLatch;
import org.springframework.stereotype.Component;

@Component
public class Receiver {

    private CountDownLatch latch = new CountDownLatch(1);

    public void receiveMessage(String message) {
        sendEmail(message);
        latch.countDown();
    }

    public CountDownLatch getLatch() {
        return latch;
    }

    public void sendEmail(String message){
        System.out.println("Email envoyé à l'administrateur.\nContenu <" + message + ">");
        /*
         * TODO Envoyer un email à l'administrateur pour indiquer le lancement du serveur d'une instance
         */
    }

}
