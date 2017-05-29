public static boolean isSubstring(String s1, String s2) {
    return s2.contains(s1);
}

public static boolean isRotation(String s1, String s2) {
    return s1.length() == s2.length() && isSubstring(s1, s2 + s1);
}
