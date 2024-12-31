
export interface FilterProps {
    filter: { search: string; sortOrder: string };
    setFilter: React.Dispatch<React.SetStateAction<{ search: string; sortOrder: string }>>;
  }