import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {
  pageTitle: string = '';
  botaoHome: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.updateTitle();
        }
      });
  }

  private updateTitle() {
    const title = this.activatedRoute.snapshot.firstChild?.data['title'];
    this.pageTitle = title;
    if (this.pageTitle != 'Gerenciamento de usuários') {
      this.botaoHome = true;
    }
  }
}
