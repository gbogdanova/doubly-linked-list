const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._tail = null;
        this._head = null;
    }

    append(data) {
        var node = new Node(data=data);
        if(this.length === 0) {
            this._head = node;
            this._tail = node;
        }
        else {
            var node_tail = this._tail;
            node_tail.next = node;
            node.prev = node_tail;
            this._tail = node;
        }
        this.length++;

        return this;
    }

    head() {
        if(this._head) {
            return this._head.data;
        }
        return null;
    }

    tail() {
        if(this._tail) {
            return this._tail.data;
        }
        return null;
    }

    at(index) {
        var length = this.length - 1;

        if(index <= length && index >= 0) {
            var node = this._head;
            var i = 0;
            while(i !== index){
                node = node.next;
                i++;
            }
            return node.data;
        }
    }

    insertAt(index, data) {
        var length = this.length - 1;

        if(index <= length && index >= 0) {
            var node = this._head;
            var i = 0;
            while(i !== index){
                node = node.next;
                i++;
            }
            node.data = data;
        }
        return this;
    }

    isEmpty() {
        if(this.length === 0) {
            return true;
        }
        return false;
    }

    clear() {
        if(this.length !== 0) {
            var node = this._head;
            while(this.length){
                node.data = null;
                node.prev = null;
                var link = node.next;
                node.next = null;
                node = link;
                link = null;
                this.length--;
            }
            this._head = null;
            this._tail = null;

        }
        return this;
    }

    deleteAt(index) {
        if(this.length != 0) {
            var length = this.length - 1;
            var node = this._head;
            if(index <= length && index >= 0) {

                var i = 0;
                while(i !== index){
                    node = node.next;
                    i++;
                }
                if(node !== this._head && node !== this._tail){
                    node.data = null;
                    node.prev.next = node.next;
                    node.next.prev = node.prev;
                    node.prev = null;
                    node.next = null;
                }
                else if(node === this._head && node !== this._tail) {
                    node.data = null;
                    this._head = node.next;
                    node.next.prev = null;
                    node.next = null;
                }
                else if(node !== this._head && node === this._tail){
                    node.data = null;
                    this._tail = node.prev;
                    node.prev.next = null;
                    node.prev = null;
                }
                else {
                    node.data = null;
                }
            }
        }

        return this;
    }

    reverse() {
        if(this.length > 1) {
            var node_f = this._head;
            var node_l = this._tail;
            var index_f = 0;
            var index_l = this.length - 1;
            while(index_f <= index_l) {
                var f = node_f.data;
                var l = node_l.data;
                node_f.data = l;
                node_l.data = f;
                node_f = node_f.next;
                node_l = node_l.prev;
                index_f++;
                index_l--;
            }
        }
        return this;
    }

    indexOf(data) {
        var index = 0;
        var node = this._head;
        var length = this.length;
        while(length) {
            if(node.data !== data) {
                node = node.next;
                index++;
            }
            else {
                return index;
                break;
            }
            length--;
        }

        return -1;
    }
}

module.exports = LinkedList;
