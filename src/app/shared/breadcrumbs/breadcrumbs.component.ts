import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit {

  public name: string;

  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.findPageName()
      .subscribe( data => {
        this.name = data.name;
        this.title.setTitle(data.name);

        const meta: MetaDefinition = {
          name: 'descripction',
          content: data.name
        };

        this.meta.updateTag(meta);

      });
  }

  ngOnInit(): void {
  }

  private findPageName(){
    return this.router.events.pipe(
      filter( event => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event: ActivationEnd) => event.snapshot.data )
    );
  }

}
