public static boolean allUniqueChars(String s) {
    Set<Character> chars = new HashSet<>();
    for (int i = 0; i < s.length(); i++) {
        char c = s.charAt(i);
        if (chars.contains(c)) return false;
        chars.add(c);
    }
    return true;
}

public static boolean allUniqueChars2(String s) {
    for (int i = 0; i < s.length() - 1; i++) {
        for (int j = i + 1; j < s.length(); j++) {
            if (s.charAt(i) == s.charAt(j)) return false;
        }
    }
    return true;
}
