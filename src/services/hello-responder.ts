import {Message} from "discord.js";
import {HelloMessage} from "./hello-message";
import {inject, injectable} from "inversify";
import {TYPES} from "../types";

@injectable()
export class HelloResponder {
    private HelloMessage: HelloMessage;

    constructor(
        @inject(TYPES.HelloMessage) HelloMessage: HelloMessage
    ) {
        this.HelloMessage = HelloMessage;
    }

    handle(message:Message): Promise<Message | Message[]> {
        if(this.HelloMessage.isHello(message.content)) {
            return message.reply('Hello, Fellow comrades !')
        }
        return Promise.reject();
    }
}