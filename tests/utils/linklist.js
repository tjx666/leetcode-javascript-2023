export function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * create linklist from given number array
 * keep the linklist elements order same as array
 *
 * @template [E=number]
 * @param {E[]} array
 * @returns {ListNode}
 */
export function createLinkListFromArray(array) {
    if (!Array.isArray(array)) throw new TypeError(`${array} is't array`);

    if (array.length === 0) {
        return null;
    }

    const head = new ListNode(array[0]);
    let tail = head;
    for (let index = 1; index < array.length; index++) {
        const element = array[index];
        const newNode = new ListNode(element);
        tail.next = newNode;
        tail = newNode;
    }

    return head;
}
