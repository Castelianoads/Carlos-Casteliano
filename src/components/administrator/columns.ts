import type User from '@/domain/models/User'
import type { ColumnDef } from '@tanstack/vue-table'
import { h } from 'vue'
import { Button } from '../ui/button'
import { ArrowUpDown } from 'lucide-vue-next'
import DropdownAction from '@/components/administrator/data-table-dropdown.vue'

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Name', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    cell: ({ row }) => h('div', { class: 'capitalize' }, row.getValue('name')),
  }, 
  { 
    accessorKey: 'isActive',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Ativo', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    cell: ({ row }) => h('div', { class: 'capitalize' }, row.getValue('isActive') ? 'Sim' : 'Não'),
  },
  {
    accessorKey: 'isEmailConfirmed',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Email confirmado', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    cell: ({ row }) => h('div', { class: 'capitalize' }, row.getValue('isEmailConfirmed') ? 'Sim' : 'Não'),
  },
  {
    accessorKey: 'isPhoneConfirmed',
    header: ({ column }) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Telefone confirmado', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    cell: ({ row }) => h('div', { class: 'capitalize' }, row.getValue('isPhoneConfirmed') ? 'Sim' : 'Não'),
  },
   {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original
      return h('div', { class: 'relative' }, h(DropdownAction, {
        user,
      }))
    },
  },
]