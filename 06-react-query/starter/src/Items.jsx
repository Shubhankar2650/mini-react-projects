import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import customFetch from './utils/utils';
const Items = () => {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['Tasks'],
    queryFn: async () => {
      const { data } = await customFetch.get('/')
      return data
    }
  });
  console.log(data);
  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
