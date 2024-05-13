import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table'
import { Button } from './components/ui/button'
import { PlusCircle } from 'lucide-react'
import { Dialog, DialogTrigger } from './components/ui/dialog'
import { ProductsFilters } from './components/products-filters'
import { CreateProductDialog } from './components/create-productdialog'

export function App() {
  return (
    <div className='p-6 max-w-4xl mx-auto space-y-4'>
      <h1 className='text-3xl font-bold'>Produtos</h1>

      <div className='flex items-center justify-between'>
        <ProductsFilters />

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className='w-4 h-4 mr-2' />
              <p>Novo Produto</p>
            </Button>
          </DialogTrigger>

          <CreateProductDialog />         
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
