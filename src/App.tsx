import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table'
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'
import { Search, PlusCircle } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog'
import { Label } from '@radix-ui/react-label'

export function App() {
  return (
    <div className='p-6 max-w-4xl mx-auto space-y-4'>
      <h1 className='text-3xl font-bold'>Produtos</h1>

      <div className='flex items-center justify-between'>
        <form className='flex items-center gap-2'>
          <Input name="id" placeholder="ID do pedido"/>
          <Input name="name" placeholder="Nome do Produto"/>
          <Button type="submit" variant="link">
            <Search className='w-4 h-4 mr-2' />
            Filtrar Resultados
          </Button>
        </form>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className='w-4 h-4 mr-2' />
              <p>Novo Produto</p>
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Novo Produto</DialogTitle>
              <DialogDescription>Criar um novo produto no Sistema</DialogDescription>
            </DialogHeader>
      

            <form action='space-y-6'>
              <div className='grid grid-cols-4 items-center text-right gap-3'>
                <Label htmlFor="name">Produto</Label>
                <Input className='col-span-3' id='name' />
              </div>

              <div className='grid grid-cols-4 items-center text-right gap-3'>
                <Label htmlFor="price">Preço</Label>
                <Input className='col-span-3' id='price' />
              </div>

              <DialogFooter>
                <Button type='submit' variant="outline">Cancelar</Button> 
                <Button type='submit'>Salvar</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className='border rounded-lg p-2'>
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>Preço</TableHead>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>289fh9123hf103frh9</TableCell>
                  <TableCell>Produto {i}</TableCell>
                  <TableCell>R$ 192,00</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default App
