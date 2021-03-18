import {injectable} from "inversify";

@injectable()
export class HelloMessage {
    private regexp = '!hello';

    public isHello(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }
}