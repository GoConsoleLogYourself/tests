import { $ } from "@wdio/globals";
import Page from "./page.js";

class HelloPage extends Page {
  public get toggleBtn() {
    return $("#toggle");
  }
  public get input() {
    return $("#search");
  }
  public get helloTitle() {
    return $("#hello");
  }

  public async toggleTitle(text: string) {
    await this.input.setValue(text);
    await this.toggleBtn.click();
  }

  public open() {
    return super.open("hello");
  }
}

export default new HelloPage();
