import {Client, Message} from "discord.js";
import {inject, injectable} from "inversify";
import {TYPES} from "./types";
import {MessageResponder} from "./services/message-responder";
import {HelloResponder} from "./services/hello-responder";

@injectable()
export class Bot {
  private client: Client;
  private readonly token: string;
  private messageResponder: MessageResponder;
  private HelloResponder: HelloResponder;

  constructor(
    @inject(TYPES.Client) client: Client,
    @inject(TYPES.Token) token: string,
    @inject(TYPES.HelloResponder) HelloResponder: HelloResponder,
    @inject(TYPES.MessageResponder) messageResponder: MessageResponder) {
        this.client = client;
        this.token = token;
        this.HelloResponder = HelloResponder;
        this.messageResponder = messageResponder;
    }

    public listen(): Promise<string> {
        this.client.on('message', (message: Message) => {
          if (message.author.bot) {
            console.log('Ignoring bot message!')
            return;
          }
    
          console.log("Message received! Contents: ", message.content);
    
          this.messageResponder.handle(message).then(() => {
            console.log("Response sent!");
          }).catch(() => {
            console.log("Response not sent.")
          }),

          this.HelloResponder.handle(message).then(() => {
            console.log("Response sent!");
          }).catch(() => {
            console.log("Response not sent.")
          })
        });
    
        //return this.client.login(this.token);
        return this.client.login("ODIxNzA3OTc2ODk2MjgyNjU2.YFHpMA.Idu2GqjGqGhl-ScQ7ZarMQjyKCg");
    }
}