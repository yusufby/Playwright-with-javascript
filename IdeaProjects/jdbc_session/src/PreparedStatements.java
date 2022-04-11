import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class PreparedStatements {
    public static void main(String[] args) {
        try{
            //loading the driver
            Class.forName("com.mysql.jdbc.Driver");

            //create a database connection
            String url = "jdbc:mysql://localhost:3306/jdbc_practice";
            String username = "root";
            String password = "45774657";

            //call a connection driver
            Connection connection = DriverManager.getConnection(url,username,password);

            String query = "insert into students(id,name,email,country) values(?,?,?,?)";

            //now we need to make a prepared statements
            PreparedStatement pstment = connection.prepareStatement(query);

            //now enter the students data. you can enter the data as many as you want
            pstment.setInt(1,6);
            pstment.setNString(2,"Demo1");
            pstment.setNString(3,"demo@gmail.com");
            pstment.setNString(4,"Turkey");


            pstment.executeUpdate();

            System.out.println("Successfully inserted into DB");
            connection.close();

        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
