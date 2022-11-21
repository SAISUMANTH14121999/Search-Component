import {customElement, html, LitElement} from "lit-element";
@customElement('search-component')
class searchComponent extends LitElement {

  public cities: string[];
  public lookup: string[];

  constructor(
  ) {
    super();
    this.cities = [];
    this.lookup = [];
    // console.log('cities: ', this.cities);
  }

  static get properties() {
    return {
      lookup: Array
    }
  }

  txtInput(e: Event) {
    console.log('txtINPUT: ', e);
    fromEvent(document.getElementById('city'), 'keyup')
      .pipe(
        map( (str: { target: { value: any; }; }) => str.target.value),
        filter( (str: string | any[]) => str.length > 2 ),
      )
      .subscribe(
        (        str: string) => {
          this.lookup = [];
          console.log(str);
          for ( const ci of this.cities ) {
            ci.toLowerCase().includes(str.toLowerCase()) ? this.lookup.push(ci) : null;
          }

          console.log('LOOKUP: ', this.lookup);
        }
      )
  }

  protected render() { 
    return html`

        <input
        id="city"
        placeholder="searching" 
        type="text" 
        @keyup="${ (e: Event) => this.txtInput(e) }" />

    <pre>
         ${this.lookup.join(', ')}
        </pre>
    `;
  }

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

}

function fromEvent(arg0: HTMLElement | null, arg1: string) {
  throw new Error("Function not implemented.");
}
