public String reverse(String s) {
    if (s.length() <= 1) return s;
    return reverse(s.substring(1, s.length())) + s.charAt(0);
}

public String reverse2(String s) {
    StringBuilder sb = new StringBuilder(s);
    return sb.reverse().toString();
}
