import {Component, ElementRef, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-sample-component',
  templateUrl: './sample-component.component.html',
  styleUrls: ['./sample-component.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SampleComponentComponent {
  constructor(public elementRef: ElementRef)
  {
    this.getDataByHTMLTag();
  }
  images = [];
  getDataByHTMLTag()
  {
    const htmlImgs = this.elementRef.nativeElement.querySelectorAll("data-element") as Array<any>;

    for (let index = 0 ; index < htmlImgs.length ; index++)
    {
      let dataElement = htmlImgs[index];
      let title = dataElement.querySelectorAll('label');
      var imageElement = {
        image: dataElement.getAttribute("src")?dataElement.getAttribute("src") : "",
        thumbImage: dataElement.getAttribute("src")?dataElement.getAttribute("src") : "",
        alt: dataElement.getAttribute("alt")?dataElement.getAttribute("alt") : ""
      };
      // @ts-ignore
      this.images.push(imageElement);
      dataElement.setAttribute("style","display:none!important");
    }
  }
}
