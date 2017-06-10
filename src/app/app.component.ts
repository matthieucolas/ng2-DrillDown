import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  nodes = [
    {
      name:"node 1",
      children:[
        {
          name:"node 1 - 1",
          children:[]
        },
        {
          name:"node 1 - 2",
          children:[
            {
              name:"node 1 - 2 - 1",
              children:[]
            },
            {
              name:"node 1 - 2 - 3",
              children:[
                {
                  name:"node 1 - 2 - 3 - 1",
                  children:[]
                },
                {
                  name:"node 1 - 2 - 3 - 2",
                  children:[]
                },
                {
                  name:"node 1 - 2 - 3 - 3",
                  children:[]
                },
                {
                  name:"node 1 - 2 - 3 - 4",
                  children:[]
                },
                {
                  name:"node 1 - 2 - 3 - 5",
                  children:[]
                },
              ]
            },
            {
              name:"node 1 - 2 - 4",
              children:[
                {
                  name:"node 1 - 2 - 4 - 1",
                  children:[]
                },
                {
                  name:"node 1 - 2 - 4 - 2",
                  children:[]
                },
                {
                  name:"node 1 - 2 - 4 - 3",
                  children:[]
                },
                {
                  name:"node 1 - 2 - 4 - 4",
                  children:[]
                },
                {
                  name:"node 1 - 2 - 4 - 5",
                  children:[]
                },
              ]
            },
            {
              name:"node 1 - 2 - 5",
              children:[
                {
                  name:"node 1 - 2 - 5 - 1",
                  children:[]
                },
                {
                  name:"node 1 - 2 - 5 - 2",
                  children:[
                    {
                      name:"node 1 - 2 - 5 - 2 - 1",
                      children:[]
                    },
                    {
                      name:"node 1 - 2 - 5 - 2 - 2",
                      children:[]
                    },
                    {
                      name:"node 1 - 2 - 5 - 2 - 3",
                      children:[]
                    },
                    {
                      name:"node 1 - 2 - 5 - 2 - 4",
                      children:[]
                    },
                    {
                      name:"node 1 - 2 - 5 - 2 - 5",
                      children:[]
                    },
                  ]
                },
                {
                  name:"node 1 - 2 - 5 - 3",
                  children:[]
                },
                {
                  name:"node 1 - 2 - 5 - 4",
                  children:[]
                },
                {
                  name:"node 1 - 2 - 5 - 5",
                  children:[]
                },
              ]
            },
            {
              name:"node 1 - 2 - 6",
              children:[]
            },
          ]
        },
        {
          name:"node 1 - 3",
          children:[]
        },
        {
          name:"node 1 - 4",
          children:[]
        },
        {
          name:"node 1 - 5",
          children:[]
        },
      ]
    },
    {
      name:"node 2",
      children:[
        {
          name:"node 2 - 1",
          children:[]
        },{
          name:"node 2 - 1",
          children:[]
        }
      ]
    },
    {
      name:"node 3",
      children:[
        {
          name:"node 3 - 1",
          children:[]
        },
        {
          name:"node 3 - 1",
          children:[]
        },
        {
          name:"node 3 - 1",
          children:[]
        },
        {
          name:"node 3 - 1",
          children:[]
        }
      ]
    },
    {
      name:"node 4",
      children:[]
    }
  ]
}
