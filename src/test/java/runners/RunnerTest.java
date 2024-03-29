package runners;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features/alugarFilme.feature",
        glue = {"steps"},
        tags = {"@esse"},
		// mostra no console o cenário igual o plugin do Cucumber
		plugin = {"pretty", "html:target/report-html", "json:target/report.json"},
		// retira a configuração para impressão colorida no console (pode criar caracteres especiais)
		monochrome = false,
		// Utiliza CamelCase para criar nome dos métodos
		snippets = SnippetType.CAMELCASE,
		// padrão false - valida se o mapeamento está correto, depois volta para false
		dryRun = false,
		// padrão false -caso um passo seja criado e nao implementado será mostrado erro no teste na barra do JUnit
		strict = false)
public class RunnerTest {

}
