/**
 * Definition for Directed graph.
 * class DirectedGraphNode {
 *     int label;
 *     ArrayList<DirectedGraphNode> neighbors;
 *     DirectedGraphNode(int x) {
 *         label = x;
 *         neighbors = new ArrayList<DirectedGraphNode>();
 *     }
 * }
 */

public class Solution {
    /**
      * @param graph: A list of DirectedGraphNode
      * @param s: start node
      * @param t: terminal node
      * @return: boolean
      */

    // dfs implementation
    public boolean hasRoute(ArrayList<DirectedGraphNode> graph,
                            DirectedGraphNode s, DirectedGraphNode t) {
        Set<DirectedGraphNode> visited = new HashSet<>();
        return dfs(graph, s, t, visited);
    }

    public boolean dfs(ArrayList<DirectedGraphNode> graph,
                       DirectedGraphNode s, DirectedGraphNode t
                       Set<DirectedGraphNode> visited) {
        if (s == t) return true;
        if (s == null || t == null) return false;
        visited.add(s);
        if (s.neighbors.size() > 0) {
            for (DirectedGraphNode node : s.neighbors) {
                if (visited.contains(node)) continue;
                if (dfs(graph, node, t, visited)) return true;
            }
        }
        return false;
    }

    // bfs implementation
    public boolean hasRoute(ArrayList<DirectedGraphNode> graph,
                            DirectedGraphNode s, DirectedGraphNode t) {
        if (graph == null || s == null || t == null) return false;
        Queue<DirectedGraphNode> q = new LinkedList<>();
        Set<DirectedGraphNode> visited = new HashSet<>();
        q.offer(s);
        while (!q.isEmpty()) {
            for (int i = 0; i < q.size(); i++) {
                DirectedGraphNode node = q.poll();
                visited.add(node);
                if (node == t) return true;
                if (node.neighbors.size() > 0) {
                    for (DirectedGraphNode n : node.neighbors) {
                        if (visited.contains(n)) continue;
                        q.offer(n);
                    }
                }
            }
        }
        return false;
    }

}
