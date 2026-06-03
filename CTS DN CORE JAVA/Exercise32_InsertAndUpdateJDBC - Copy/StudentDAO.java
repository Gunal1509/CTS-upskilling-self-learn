import java.sql.*;

public class StudentDAO {

    static Connection getConnection() throws Exception {

        return DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/studentdb",
                "root",
                "root");
    }

    static void insertStudent(int id,String name)
            throws Exception {

        Connection con = getConnection();

        PreparedStatement ps =
        con.prepareStatement(
                "INSERT INTO students VALUES(?,?)");

        ps.setInt(1,id);
        ps.setString(2,name);

        ps.executeUpdate();

        con.close();
    }

    static void updateStudent(int id,String name)
            throws Exception {

        Connection con = getConnection();

        PreparedStatement ps =
        con.prepareStatement(
                "UPDATE students SET name=? WHERE id=?");

        ps.setString(1,name);
        ps.setInt(2,id);

        ps.executeUpdate();

        con.close();
    }
}import java.sql.*;

public class BasicJDBCConnection {

    public static void main(String[] args) {

        String url = "jdbc:mysql://localhost:3306/studentdb";
        String user = "root";
        String password = "root";

        try {

            Connection con =
            DriverManager.getConnection(url,user,password);

            Statement st = con.createStatement();

            ResultSet rs =
            st.executeQuery("SELECT * FROM students");

            while(rs.next()) {

                System.out.println(
                    rs.getInt("id") + " " +
                    rs.getString("name")
                );
            }

            con.close();

        } catch(Exception e) {

            System.out.println(e);
        }
    }
}