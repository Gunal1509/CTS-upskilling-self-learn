public class TypeCastingExample {

    public static void main(String[] args) {

        double d = 45.78;
        int i = (int)d;

        System.out.println("Double value: " + d);
        System.out.println("Converted int value: " + i);

        int num = 25;
        double d2 = num;

        System.out.println("Integer value: " + num);
        System.out.println("Converted double value: " + d2);
    }
}