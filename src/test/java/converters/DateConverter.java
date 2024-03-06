package converters;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import cucumber.api.Transformer;

public class DateConverter extends Transformer<Date> {

	@Override
	public Date transform(String data) 
	{
		DateFormat format = new SimpleDateFormat("dd/MM/yyyy"); 
		try {
            return format.parse(data);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return null;
	}

}
