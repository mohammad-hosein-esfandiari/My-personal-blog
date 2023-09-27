import { Template } from "@/papers/template"
import { useLang } from "@/store/lang"
export const books:any[] = [
  {
    id: 1,
    name: "frontend_developers_needs_to_know",
    title:useLang.getState().langObj.books.allFrontendNeeds,
    headlines: [
      {
        id: 1,
        headline: "lifecycle",
        pages:[
          {
            id:'lifeCycle-'+1,
            front:Template,
            back:"2"
          },
          {
            id:'lifeCycle-'+1,
            front:Template,
            back:"4"
          },
          {
            id:'lifeCycle-'+1,
            front:Template,
            back:"6"
          },
        ]
        
      },
      {
        id: 1,
        headline: "blue",
        pages:[
          {
            id:'lifeCycle-'+1,
            front:Template,
            back:Template
          },
          {
            id:'lifeCycle-'+1,
            front:Template,
            back:Template
          },
          {
            id:'lifeCycle-'+1,
            front:Template,
            back:Template
          },
        ]
        
      }
    ]
  },
  {
    id: 1,
    name: "concept_of_react",
    title:"Concepts Of React",
    headlines: [
      {
        id: 1,
        headline: "lifecycle",
        pages:[
          {
            id:'lifeCycle-'+1,
            front:"1",
            back:"2"
          },
          {
            id:'lifeCycle-'+1,
            front:"3",
            back:"4"
          },
          {
            id:'lifeCycle-'+1,
            front:"5",
            back:"6"
          },
        ]
        
      },
      {
        id: 1,
        headline: "blue",
        pages:[
          {
            id:'lifeCycle-'+1,
            front:"7",
            back:"8"
          },
          {
            id:'lifeCycle-'+1,
            front:"9",
            back:"10"
          },
          {
            id:'lifeCycle-'+1,
            front:"11",
            back:"12"
          },
        ]
        
      }
    ]
  },
 
]
