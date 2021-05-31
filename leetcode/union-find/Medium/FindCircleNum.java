// 547. Number of Provinces - Medium

class FindCircleNum {

    private int[] id;
    private int n;
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
        id[pid] = qid;
        count--;
    }
    
    
    public int findCircleNum(int[][] isConnected) {
        n = isConnected.length;
        id = new int[n];
        count = n;
        
        for(int i = 0; i < n; i++) {
            id[i] = i;
        }

        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                if( (isConnected[i][j] != 0) && i != j) {
                    union(i,j);
                }
            }
        }
        return count;
    }

    public static void main(String[] args) {
        int[][] grid1 = { {1,1,0},{1,1,0},{0,0,1} };
        FindCircleNum n1 = new FindCircleNum();
        System.out.println(n1.findCircleNum(grid1)); //Answer: 2
        int[][] grid2 = { {1,0,0},{0,1,0},{0,0,1} };
        FindCircleNum n2 = new FindCircleNum();
        System.out.println(n2.findCircleNum(grid2)); //Answer: 3
    }    
}