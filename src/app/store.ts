import { signalStore, withState, withComputed, withHooks, withMethods, patchState } from "@ngrx/signals";
import { computed } from "@angular/core";


export let list = {
    name: 'book',
    price: 100,
    loading: false
}

export let mylist = signalStore(
    // {providedIn:'root'}
    withState(list),
    withMethods(store => ({
        getname: (n: string) => {
            patchState(store, { loading: true })
            setTimeout(() => {
                patchState(store, { name: n, loading: false })
            }, 2000)

        },
        pluser: () => {
            patchState(store, { price: store.price() + 1 })
        }
    })),
    withComputed(store => ({
        discount: computed(() => {
            return store.price() * 0.9
        })
    }))

)
export class bro extends mylist { }