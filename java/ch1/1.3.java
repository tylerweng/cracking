public static String removeDups(String s) {
    Set<Character> chars = new HashSet<>();
    StringBuilder sb = new StringBuilder();
    for (int i = 0; i < s.length(); i++) {
        char c = s.charAt(i);
        if (! chars.contains(c)) sb.append(c);
        chars.add(c);
    }
    return sb.toString();
}
