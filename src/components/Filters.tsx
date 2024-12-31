import { Input,SelectContent, SelectItem, SelectRoot, SelectTrigger, SelectValueText, createListCollection } from '@chakra-ui/react';
import { FilterProps } from '../types/FilterProps';


export default function Filters({ filter, setFilter }: FilterProps) {
    return (
        <div className='flex flex-col gap-5'>
                <Input placeholder='Поиск' onChange={(e) => setFilter({...filter, search: e.target.value})}/>
                <SelectRoot collection={orderBy} size="sm" width="320px" className='py-3'>
              <SelectTrigger>
                <SelectValueText placeholder={orderBy.items.find((item) => item.value === filter.sortOrder)?.label || "Выберите сортировку"} />
              </SelectTrigger>
              <SelectContent>
          {orderBy.items.map((items) => (
            <SelectItem
              item={items}
              key={items.value}
              onClick={() =>
                setFilter({ ...filter, sortOrder: items.value })
              }
            >
              {items.label}
            </SelectItem>
          ))}
        </SelectContent>
            </SelectRoot>
            </div>
    )
}
const orderBy = createListCollection({
    items: [
      { label: "Сначала новые", value: "desc" },
      { label: "Сначала старые", value: "asc" },
    ],
  })