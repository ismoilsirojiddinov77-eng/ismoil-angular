import { Component, inject, Inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';
import { HamilionComponent } from './hamilion/hamilion.component';
import { AdminComponent } from './admin/admin.component';
import { bro, mylist } from './store';
import { CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
interface broo {
  userId: number,
  id: number,
  title: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent, ListComponent, HamilionComponent, AdminComponent, RouterLink, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [mylist]
})
export class AppComponent {
  title = 'signal';
  url = 'https://jsonplaceholder.typicode.com/todos/'
  ingbro = inject(mylist)
  http = inject(HttpClient)
  user: broo[] = []
  geter() {
    this.http.get<broo[]>(this.url).subscribe(data => {
      this.user = data
      console.log(data)
    })
  }
  newpost() {
    let bro = {
      userId: 23,
      id: 234,
      title: 'brooooo'
    }
    this.http.post(this.url, bro).subscribe(data => {
      console.log(data)
    })
  }
  puter(n: number) {
    let bro = {
      userId: 233,
      id: 2334,
      title: 'brooooo'
    }
    this.http.put(`https://jsonplaceholder.typicode.com/todos/${n}`, bro).subscribe(data => {
      console.log(data)
    })
  }
  patcher(n: number) {
    let bro = {
      title: 'brooooo'
    }
    this.http.patch(`https://jsonplaceholder.typicode.com/todos/${n}`, bro).subscribe(data => {
      console.log(data)
    })
  }
  del(n: number) {
    this.http.delete(`https://jsonplaceholder.typicode.com/todos/${n}`).subscribe(data => {
      console.log(data)
    })
  }

}

