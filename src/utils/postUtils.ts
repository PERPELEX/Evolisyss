export const getPostColorFromCategory = (category: string) =>{
    switch(category){
        case'Marketing': return 'lime';
        case'Software Development': return 'cyan';
        case 'Nft':return 'violet';
        case 'Animations': return 'red';
        case 'Technology': return 'orange';
        default:
            return 'fuchsia';
    }
}