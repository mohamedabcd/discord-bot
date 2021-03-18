
import { Client, Message } from 'discord.js'

import * as path from 'path'
import * as YAML from 'yamljs'


export class Team_Rac_Mom_Jor {
		private client: Client
		private config: any

		constructor() {
			this.client = new Client()
			this.config = YAML.load(path.resolve(__dirname, 'settings.yml'))
		}

		public start(): void {
			
				this.client.on('ready', () => {
					
					console.log(`Logged in as ${ this.client.user.tag }`)
					this.client.user.setActivity(this.config.settings.activity)
				})

		
				this.client.on('message', (message: Message) => {
						if (message.author.id !== this.client.user.id) {
						      
                                if ((message.content == this.config.settings.prefix +"hello") || (message.content == this.config.settings.prefix +"guten tag" )||(message.content == this.config.settings.prefix + "bonjour" )|| (message.content ==this.config.settings.prefix +"salut")) { 
                                    message.reply("Bonjour, soyez les bienvenus au salon des geeks !");
                                this.config.settings.prefix 
                            
                                
                                }
						}
				})


				this.client.login(this.config.settings.token)
		}
	}

const botRMJ: Team_Rac_Mom_Jor = new Team_Rac_Mom_Jor()
botRMJ.start()