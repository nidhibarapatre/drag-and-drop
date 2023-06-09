const list_items=document.querySelectorAll('.list-item');
const lists=document.querySelectorAll('.list');
let draggedItem=null;
for(let i=0;i<list_items.length;i++)
{
    const item=list_items[i];
    //the user starts dragging an item
    item.addEventListener('dragstart',function(){
        draggedItem=item;
        setTimeout(function(){
            item.style.display='none';
            
        },0)

    });


    //a dragged item is dragged
    item.addEventListener('drag',function(){
        
        setTimeout(function(){
            draggedItem.style.display='block';
            draggedItem.style.backgroundColor='#FFCDFF';

        },0)
    });
    
    //a drag operation ends
    item.addEventListener('dragend',function(){
        setTimeout(function(){
            draggedItem.style.display='block';
            
            draggedItem=null;

        },0);
    })
    
        const list=lists[1];
        
        //a dragged item is being dragged over a valid drop target, every few hundred milliseconds.
        list.addEventListener('dragover',function(e){
            e.preventDefault();
        });

        //a dragged item enters a valid drop target
        list.addEventListener('dragenter',function(e){
            e.preventDefault();
            this.style.backgroundColor='rgba(0,0,0,0.2)';
        });
        
        //a dragged item leaves a valid drop target
        list.addEventListener('dragleave',function(e){
            this.style.backgroundColor='rgba(0,0,0,0.1)';
        });

        //an item is dropped on a valid drop target
        list.addEventListener('drop',function(e){
            draggedItem.style.backgroundColor='purple';
            draggedItem.style.color='white';
            this.append(draggedItem);
            this.style.backgroundColor='rgba(0,0,0,0.1)';
        });

    
}

