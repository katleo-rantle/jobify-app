import { Button } from './ui/button';
import { Badge } from './ui/badge';
import JobInfo from './JobInfo';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteJobAction } from '@/utils/action';
import { useToast } from '@/hooks/use-toast';

function DeleteJobButton({id}:{id:string}) {
  const {toast} = useToast()
  const queryClient = useQueryClient()
  const {mutate, isPending} = useMutation({
    mutationFn:(id:string)=>deleteJobAction(id),
    onSuccess:(data)=>{
      if(!data){
        toast({
          description:'there was an error'
        })
        return
      }
      queryClient.invalidateQueries({queryKey: ['jobs']})
      queryClient.invalidateQueries({queryKey: ['stats']})
      queryClient.invalidateQueries({queryKey: ['charts']})

      toast({description:'job removed!'})
    }
  })
  return (
    <Button 
    size='sm'
    onClick={()=>{
      mutate(id)
    }} disabled={isPending}>
      {isPending?'deleting...':'delete'}
    </Button>
  )
}
export default DeleteJobButton;