import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

interface ITodos {
    id:string,
    title:string,
    completed:boolean
}

export const myApi = createApi({
   reducerPath: 'myApi',
   tagTypes:['Todos'],
   baseQuery: fetchBaseQuery({baseUrl:'http://localhost:8000/'}),
   endpoints: (build) => ({
    getMyApi: build.query<any,void>({
        query: () => `todos`,
        providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }:any) => ({ type: 'Todos' as const, id })),
              { type: 'Todos', id: 'LIST' },
            ]
          : [{ type: 'Todos', id: 'LIST' }],
    }),
    addMyApi: build.mutation({ 
      query: (body) => ({
        url:'todos',
        method:'POST',
        body,
      }),
      invalidatesTags:[{type:'Todos',id:'LIST'}]
    }),
    updateMyApi: build.mutation<string,any>({
      query: (data) => {
        const {id,...body} = data
        return {
          url: `todos/${id}`,
          method: 'PUT',
          body,
        }
      },
      invalidatesTags:[{type:'Todos',id:'LIST'}]

    }),
    updateComplate: build.mutation<string,any>({
      query: (data) => {
        const {id,...body} = data
        return{
          url: `todos/${id}`,
          method:'PUT',
          body,
        }
      },
      invalidatesTags:[{type:'Todos',id:'LIST'}]
    }),

    removeTodo: build.mutation({
      query: (id) => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags:[{type:'Todos',id:'LIST'}]
    })
     

    
   })
})

export const {
  useGetMyApiQuery,
  useAddMyApiMutation,
  useUpdateMyApiMutation,
  useUpdateComplateMutation,
  useRemoveTodoMutation} = myApi