import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";
import { DialogHeader, DialogFooter, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { Input } from "./ui/input";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form' 

const createProductSchema = z.object ({
    name: z.string(),
    price: z.coerce.number()
})

type CreateProductSchema = z.infer<typeof createProductSchema>

export function CreateProductDialog() {

    const { register, handleSubmit } = useForm<CreateProductSchema> ({
        resolver: zodResolver(createProductSchema),
    })

    function handleCreateProduct(data: CreateProductSchema) {
        console.log(data)
    }

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Novo Produto</DialogTitle>
                <DialogDescription>Criar um novo produto no Sistema</DialogDescription>
            </DialogHeader>


            <form onSubmit={handleSubmit(handleCreateProduct)} className='space-y-6'>
                <div className='grid grid-cols-4 items-center text-right gap-3'>
                    <Label htmlFor="name">Produto</Label>
                    <Input className='col-span-3' id='name' {...register('name')} />
                </div>

                <div className='grid grid-cols-4 items-center text-right gap-3 space-y-3'>
                    <Label htmlFor="price">Preço</Label>
                    <Input className='col-span-3' id='price' {...register('price')} />
                </div>

                <DialogFooter className='mt-[5%]'>
                    <Button type='submit' variant="outline">Cancelar</Button>
                    <Button type='submit'>Salvar</Button>
                </DialogFooter>
            </form>
        </DialogContent>
    )
}