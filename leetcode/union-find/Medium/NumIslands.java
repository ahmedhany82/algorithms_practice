// 200. Number of Islands - Medium
// Using Union Find

class NumIslands {
    
    private int[] id;
    private int[] size;
    private int n;
    private int m;
    private int count;
    
    private int find(int p) {
        int root = p;
        while(root != id[root]) {
            root = id[root];
        }
        
        while(p != root) {
            int temp = id[p];
            id[p] = root;
            p = temp;
        }
        
        return root;
    }
    
    private void union(int p, int q) {
        int pid = find(p);
        int qid = find(q);
        
        if(pid == qid) return;
        
        if(size[pid] < size[qid]) {
            id[pid] = qid;
            size[qid] += size[pid];
        } else {
            id[qid] = pid;
            size[pid] += size[qid];
        }
        count--;
    }
    
    private int xyTo1D(int i, int j) {
        return i*n+j;
    }
    
    private boolean validate(int i, int j) {
        if(i >=0 && j >= 0 && i < m && j < n) {
            return true;
        }
        return false;
    }
    
    public int numIslands(char[][] grid) {
        
        m = grid.length;
        n = grid[0].length;
        
        id = new int[m*n];
        size = new int[m*n];
        
        for(int i = 0; i < m*n; i++) {
            id[i] = i;
            size[i] = 1;
        }
        
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) {
                if(grid[i][j] != '0') {
                    count++;
                    int index = xyTo1D(i,j);
                    if (validate(i, j+1) && grid[i][j+1] != '0') { union(index, index+1); }
                    if (validate(i, j-1) && grid[i][j-1] != '0') { union(index, index-1); }
                    if (validate(i+1, j) && grid[i+1][j] != '0') { union(index, index+n); }
                    if (validate(i-1, j) && grid[i-1][j] != '0') { union(index, index-n); }
                }
            }
        }
        return count;
    }

    public static void main(String[] args) {
        char[][] grid1 = { {'1','1','1','1','0'},{'1','1','0','1','0'},{'1','1','0','0','0'},{'0','0','0','0','0'} };
        NumIslands n1 = new NumIslands();
        System.out.println(n1.numIslands(grid1)); //Answer: 1
        char[][] grid2 = { {'1','1','0','0','0'},{'1','1','0','0','0'},{'0','0','1','0','0'},{'0','0','0','1','1'} };
        NumIslands n2 = new NumIslands();
        System.out.println(n2.numIslands(grid2)); //Answer: 3
    }
}