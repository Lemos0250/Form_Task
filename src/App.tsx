import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table'

export function App() {
  return (
    <div className='p-6 max-w-4xl mx-auto'>
      <div className='border rounded-lg p-2'>
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>Preço</TableHead>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10}).map((_,i) => {
              return (
              <TableRow key={i}>
                <TableCell>289fh9123hf103frh9</TableCell>
                <TableCell>Produto 01 {i}</TableCell>
                <TableCell>R$ 192,00</TableCell>
                <TableCell>Accept</TableCell>
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
