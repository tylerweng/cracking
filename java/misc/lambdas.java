// Can test in repl
import java.util.*;

class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
        List<Integer> l = new ArrayList<>();
        l.add(7);
        l.add(2);
        lambdaTest(l);
        Map<Character, ArrayList<Integer>> m = new HashMap<>();
        String s = "alphabet";
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (m.containsKey(c)) {
                m.get(c).add(i);
            } else {
                ArrayList<Integer> indices = new ArrayList<>();
                indices.add(i);
                m.put(c, indices);
            }
        }
        lambdaTest2(m);
    }
    public static int[][] cloneMatrix(int[][] matrix) {
        int[][] clone = new int [matrix.length][matrix[0].length];
        return clone;
    }
    public static void lambdaTest(List<Integer> l) {
        l.forEach(v -> System.out.println(v));
    }

    public static void lambdaTest2(Map<Character, ArrayList<Integer>> m) {
        m.forEach((k, v) -> {
            System.out.println("Key: " + k);
            System.out.println("Value: " + v);
        });
    }
}
