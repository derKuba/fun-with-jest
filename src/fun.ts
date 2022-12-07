import { v4 as uuidv4 } from "uuid";
import axios from "axios";

class Fun {
  private id: string = "";
  constructor() {
    const random = Math.floor(Math.random() * 100);
    this.id = random % 2 === 1 ? "odd" : "even";
  }

  printId() {
    return this.id;
  }

  createUUID() {
    return `kuba_${uuidv4()}`;
  }

  sum(a: number, b: number) {
    return a + b;
  }

  renderHTML({ title, name }: { title: string; name: string }) {
    return `
            <html>
                <head>
                    <title>${title}</title>
                </head>
                <body>
                    Hello ${name}
                </body>
            </html>
        `;
  }

  async fetchCharacter() {
    return await axios.get(`https://randomuser.me/api/`);
  }
}

export default Fun;

// https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/
