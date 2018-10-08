/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var mergeTwoLists = function(l1, l2) {
    
    let c2 = l2
    let c1 = l1
    let curr = new ListNode(null)
    let c = curr
    
    while(c1 !== null || c2 !== null){

        if (c1 === null){
            curr.next = c2
            break
        }else if (c2 === null){
            curr.next = c1
            break
        }
        
        if (c1.val <= c2.val){
            curr.next =  new ListNode(c1.val)
            c1 = c1.next
        }else{
            curr.next = new ListNode(c2.val)
            c2 = c2.next
        }
        curr = curr.next
        
    }
    
    return c.next
};