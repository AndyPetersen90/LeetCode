// ================ HASH TABLES ================
/*
Hash Tables (also known as Hash Maps) are data structures that store key-value pairs.
They use a hash function to compute an index (hash code) where a value will be stored.
Key features:
- O(1) average time for insertions, deletions, and lookups
- Keys must be unique
- Values can be duplicated
*/

// Example 1: Using JavaScript/TypeScript's built-in Map
function hashTableBasics() {
  console.log("=== Hash Table Basics ===");

  // Create a new hash table
  const hashTable = new Map<string, number>();

  // Insert key-value pairs
  hashTable.set("apple", 1);
  hashTable.set("banana", 2);
  hashTable.set("orange", 3);

  // Lookup values
  console.log("apple value:", hashTable.get("apple")); // 1

  // Check if key exists
  console.log("has apple?", hashTable.has("apple")); // true
  console.log("has grape?", hashTable.has("grape")); // false

  // Delete a key-value pair
  hashTable.delete("banana");

  // Size of hash table
  console.log("size:", hashTable.size); // 2

  // Iterate over key-value pairs
  for (const [key, value] of hashTable) {
    console.log(`${key}: ${value}`);
  }
}

// Example 2: Custom Hash Table Implementation
class SimpleHashTable<K, V> {
  private storage: Array<Array<[K, V]>>;
  private size: number;

  constructor(size: number = 10) {
    this.storage = new Array(size).fill(null).map(() => []);
    this.size = size;
  }

  private hash(key: K): number {
    // Simple hash function for demonstration
    const stringKey = String(key);
    let total = 0;
    for (let i = 0; i < stringKey.length; i++) {
      total += stringKey.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key: K, value: V): void {
    const index = this.hash(key);
    const bucket = this.storage[index];

    // Check if key already exists
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }

    // Add new key-value pair
    bucket.push([key, value]);
  }

  get(key: K): V | undefined {
    const index = this.hash(key);
    const bucket = this.storage[index];

    for (const [k, v] of bucket) {
      if (k === key) return v;
    }

    return undefined;
  }
}

// ================ BINARY TREES ================
/*
Binary Trees are hierarchical data structures where each node has at most two children.
Types of Binary Trees:
1. Binary Search Tree (BST): Left child < Parent < Right child
2. Complete Binary Tree: All levels filled except possibly last level
3. Full Binary Tree: Each node has 0 or 2 children
4. Perfect Binary Tree: All internal nodes have 2 children and all leaves at same level
*/

// Binary Tree Node
class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Binary Search Tree Implementation
class BinarySearchTree<T> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  // Insert a value into the BST
  insert(value: T): void {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

  // Search for a value in the BST
  search(value: T): boolean {
    let current = this.root;

    while (current) {
      if (value === current.value) return true;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  // Tree traversal methods
  inorderTraversal(node: TreeNode<T> | null = this.root): T[] {
    const result: T[] = [];

    if (node) {
      result.push(...this.inorderTraversal(node.left));
      result.push(node.value);
      result.push(...this.inorderTraversal(node.right));
    }

    return result;
  }
}

// Example usage
function runExamples() {
  // Hash Table Example
  console.log("\nHash Table Example:");
  const myHashTable = new SimpleHashTable<string, number>();
  myHashTable.set("one", 1);
  myHashTable.set("two", 2);
  console.log(myHashTable.get("one")); // 1
  console.log(myHashTable.get("three")); // undefined

  // Binary Search Tree Example
  console.log("\nBinary Search Tree Example:");
  const bst = new BinarySearchTree<number>();
  [5, 3, 7, 1, 4, 6, 8].forEach((num) => bst.insert(num));

  console.log("Inorder traversal:", bst.inorderTraversal()); // [1, 3, 4, 5, 6, 7, 8]
  console.log("Search for 4:", bst.search(4)); // true
  console.log("Search for 9:", bst.search(9)); // false
}

// Run the examples
hashTableBasics();
runExamples();

/*
Common Hash Table Use Cases:
1. Caching (memoization)
2. Counting frequencies
3. Finding duplicates
4. Two-sum type problems
5. Implementing Sets

Common Binary Tree Use Cases:
1. Hierarchical data (file systems)
2. Sorted data storage (BST)
3. Expression parsing
4. Decision trees
5. Database indexing

Time Complexities:

Hash Tables:
- Insert: O(1) average, O(n) worst
- Delete: O(1) average, O(n) worst
- Search: O(1) average, O(n) worst

Binary Search Tree:
- Insert: O(log n) average, O(n) worst
- Delete: O(log n) average, O(n) worst
- Search: O(log n) average, O(n) worst
*/
